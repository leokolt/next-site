import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import Date from '@/lib/date';

export const config = {
  runtime: 'edge',
};

// Make sure the font exists in the specified path:
const fontBold = fetch(new URL('../../public/fonts/Onest-Bold.otf', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );

  const font = fetch(new URL('../../public/fonts/Onest-Regular.otf', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );

const backgrounds = [
    {
        background: 'url("data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><circle r="1" fill="%23888" /></svg>")',
        backgroundRepeat: 'repeat',
    },
    {
      backgroundColor: '#e5e5f7',
      backgroundImage:
        'linear-gradient(135deg, #444cf7 25%, transparent 25%), linear-gradient(225deg, #444cf7 25%, transparent 25%), linear-gradient(45deg, #444cf7 25%, transparent 25%), linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%)',
      backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
      backgroundSize: '10px 10px',
      backgroundRepeat: 'repeat',
    },
    {
      backgroundColor: '#e5e5f7',
      backgroundImage:
        'linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777), linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777)',
      backgroundPosition: '20px 35px',
      backgroundSize: '0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px',
    },
    {
        backgroundColor: '#e5e5f7',
        backgroundImage: 'linear-gradient(45deg, #444cf7 50%, #e5e5f7 50%)',
        backgroundSize: '24px 24px',
    },
    {
        backgroundColor: 'white',
        backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
        backgroundSize: '100px 100px',
    }
  ];

  const randomBackgroundNumber = Math.floor(Math.random() * backgrounds.length);

export default async function(NextRequest) {
    const fontDataBold = await fontBold;
    const fontData = await font;
    try {
        // 1: get the searchParams from the NextRequestuest URL
        const { searchParams } = new URL(NextRequest.url)

        // 2: Check if title or description are in the params
        const hasTitle = searchParams.has("title")
        const hasDescription = searchParams.has("description")
        const hasDate = searchParams.has("date")

        // 3: If so, take the passed value. If not, assign a default
        const title = hasTitle
            ? searchParams.get("title")?.slice(0, 200)
            : "Some title"

        const description = hasDescription
            ? searchParams.get("description")?.slice(0, 300)
            : "Some description"

        const date = hasDate
            ? searchParams.get("date")?.slice(0, 200)
            : "Some date"

        return new ImageResponse(
            (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    ...backgrounds[randomBackgroundNumber],
                    padding: '30px'

                }}
            >

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        width: '100%',
                        backgroundColor: '#f7f7f7',
                        border: '4px solid #494949',
                        boxShadow: '5px 5px #494949'
                    }}
                >
                                        <div
                        style={{
                            display: 'flex',
                            marginTop: 15,
                            fontSize: 18,
                            opacity: .75,
                            padding: '0 20px'
                        }}
                    >
                        {hasDate ? <Date dateString={date} /> : null}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            fontSize: 60,
                            fontStyle: 'normal',
                            color: '#494949',
                            marginTop: 40,
                            lineHeight: 1,
                            fontWeight: 700,
                            whiteSpace: 'pre-wrap',
                            padding: '0 20px',
                            textAlign: 'left'
                        }}
                    >
                        <b>{title}</b>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            fontSize: 25,
                            fontStyle: 'normal',
                            fontWeight: 400,
                            color: '#494949',
                            marginTop: 10,
                            lineHeight: 1.3,
                            whiteSpace: 'pre-wrap',
                            padding: '0 20% 0 20px',
                            textAlign: 'left'
                        }}
                    >
                        {description}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            margin: '20px',
                            marginTop: 'auto',
                            gap: '30px',
                            color: '#494949'
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 160" width="40" height="50"><path d="M10 20 0 29.9v-5.5L5 20zM28 20 0 46.9v-5.5L22 20zM40 27 0 64.9v-5.5L40 21zM40 44 0 81.9v-5.5L40 38zM40 61 0 98.9v-5.5L40 55zM40 78 0 115.9v-5.5L40 72zM40 95 0 132.9v-5.5L40 89zM40 112 0 149.9v-5.5L40 106zM40 129 7 160H1l39-37zM40 146l-15 14h-6l21-20zM40 160h-3l3-3z" fill="#494949"/><path d="M128 107.7 69.7 73.9l58.3-34V0L0 73.9 88 126v34h40z" fill="#f65f59"/></svg>
                        <span>koltan.dev</span>
                        <span>t.me/leonidkoltan</span>
                        <span>wa.me/9923554536</span>
                    </div>
                </div>
            </div>
            ),
            {
                width: 1200,
                height: 600,
                fonts: [
                    {
                      name: "Onest",
                      data: fontDataBold,
                      style: 'normal',
                      weight: 700,
                    },
                    {
                        name: "Onest",
                        data: fontData,
                        style: 'normal',
                        weight: 400,
                      },
                ]
            }
    )
    } catch (e) {
      return new Response(`Failed to generate the image`, {
        status: 500
      })
    }
  }
