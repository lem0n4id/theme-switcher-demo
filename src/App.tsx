import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { useState } from 'react'

export default function App() {
  const [theme, setTheme] = useState('terminal');

  return (
    <div className={`${theme} flex flex-col w-screen h-screen bg-brand px-3 lg:px-16 py-10`}>
      <header className="flex items-center justify-between px-4 py-2 border-b border-primary-theme">
        <h1 className="text-5xl font-semibold text-title">Theme Switcher - {theme}</h1>
        <Select onValueChange={(value) => setTheme(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="terminal">Terminal</SelectItem>
            <SelectItem value="cyber">Cyber</SelectItem>
            <SelectItem value="historic">Historic</SelectItem>
          </SelectContent>
        </Select>
      </header>
      <main className="flex-1 p-4 md:p-6 overflow-auto">
        <div className="">
          <h2 className="text-primary-theme">Welcome to the Theme Switcher</h2>
          <p className="text-secondary-theme">
            This is a demo website for switching themes. It has 5 theme options to select: light, dark,
            terminal, cyber, and historic. The website showcases a simple layout with a header, a main content
            area, and a footer. Each theme option changes the color scheme of the website to reflect the selected
            theme.
          </p>
        </div>
      </main>
      <footer className="flex items-center justify-center py-4 border-t border-primary-theme ">
        <p className="text-sm text-secondary-theme">Made with ❤️ by <a href="https://www.github.com/lem0n4id">Lenin Kennedy</a></p>
      </footer>
    </div>
  )
}
