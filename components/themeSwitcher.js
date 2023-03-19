import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';


const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme ;


  return (
    <>

        <button
        	className="mainBtn"
			role="button"
			onClick={() => (currentTheme === 'dark' ? setTheme('light') : setTheme('dark'))}
			data-theme={`${theme}-theme`}
		>
			{currentTheme === 'dark' ? 'темно' : 'светло'}
		</button>

    </>
  );
};

export default ThemeToggle;
