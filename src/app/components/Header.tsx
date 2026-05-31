import { LogOut, User } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  const tabs = ['Головна', 'Поселення', 'Перепоселення', 'Студенти', 'Архів'];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          <div className="text-xl font-semibold text-gray-900">
            Управління гуртожитками
          </div>
          <nav className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">
                Іванов Іван Іванович
              </div>
              <div className="text-xs text-gray-500">Адміністратор</div>
            </div>
          </div>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-md transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
