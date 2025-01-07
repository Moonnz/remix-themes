import {Theme, useTheme} from "remix-themes";

export default function Index() {
    const [, setTheme] = useTheme()
    return (
        <div>
            <h1>Welcome to Remix</h1>
            <button
                type="button"
                onClick={() =>
                    setTheme(prev => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK))
                }
            >
                Toggle theme
            </button>
            <a href="/">Home</a>
        </div>
    )
}
