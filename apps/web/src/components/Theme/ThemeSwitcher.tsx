import { useTheme } from './ThemeProvider';

type Theme = 'cream' | 'warm-beige' | 'cool-gray' | 'taupe';

const THEME_OPTIONS: { value: Theme; label: string; color: string }[] = [
  { value: 'cream', label: 'Cream', color: 'bg-cream-200' },
  { value: 'warm-beige', label: 'Warm Beige', color: 'bg-warm-beige-200' },
  { value: 'cool-gray', label: 'Cool Gray', color: 'bg-cool-gray-200' },
  { value: 'taupe', label: 'Taupe', color: 'bg-taupe-200' },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      {THEME_OPTIONS.map((option) => (
        <button
          key={option.value}
          onClick={() => setTheme(option.value)}
          title={option.label}
          className={`w-6 h-6 rounded-full transition-all ${option.color} ${
            theme === option.value
              ? 'ring-2 ring-offset-2 ring-cool-gray-400'
              : 'hover:ring-1 hover:ring-offset-1 hover:ring-cool-gray-300'
          }`}
          aria-label={`Switch to ${option.label} theme`}
        />
      ))}
    </div>
  );
}
