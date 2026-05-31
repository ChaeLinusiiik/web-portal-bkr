import { useState } from 'react';
import { Header } from './components/Header';
import { DormitoriesOverview } from './components/DormitoriesOverview';
import { DormitoryDetails } from './components/DormitoryDetails';
import { RelocationPage } from './components/RelocationPage';
import { StudentCardModal } from './components/StudentCardModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('Головна');
  const [isStudentCardOpen, setIsStudentCardOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'Головна':
        return <DormitoriesOverview />;
      case 'Поселення':
        return <DormitoryDetails />;
      case 'Перепоселення':
        return <RelocationPage />;
      case 'Студенти':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">Студенти</h1>
            <p className="text-gray-600">Розділ в розробці...</p>
            <button
              onClick={() => setIsStudentCardOpen(true)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Відкрити картку студента (приклад)
            </button>
          </div>
        );
      case 'Архів':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">Архів</h1>
            <p className="text-gray-600">Розділ в розробці...</p>
          </div>
        );
      default:
        return <DormitoriesOverview />;
    }
  };

  return (
    <div className="size-full flex flex-col bg-gray-50">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
      {isStudentCardOpen && <StudentCardModal onClose={() => setIsStudentCardOpen(false)} />}
    </div>
  );
}