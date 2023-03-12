import Image from 'next/image'

export default function IntroHeader() {
    return (
      <header>
        <div>
          <div>
            <h1>
              Hi, I'm Chris!
              <br />
              Creative Developer
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </p>
            <a href='#'>Check my work</a>
          </div>

            <Image
                src='/images/photo.png'
                width='200'
                height='200'
                alt="Picture of the author"
            />

        </div>
      </header>
    );
  }
