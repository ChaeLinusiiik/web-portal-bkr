import { X } from 'lucide-react';
import { useState } from 'react';

interface FiltersModalProps {
  onClose: () => void;
}

export function FiltersModal({ onClose }: FiltersModalProps) {
  const [gender, setGender] = useState<string>('');
  const [placeStatus, setPlaceStatus] = useState<string[]>([]);

  const togglePlaceStatus = (status: string) => {
    setPlaceStatus(prev =>
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Фільтри</h2>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-4 space-y-6">
          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Стать</label>
            <div className="flex gap-2">
              <button
                onClick={() => setGender('male')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  gender === 'male'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Чоловіча
              </button>
              <button
                onClick={() => setGender('female')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  gender === 'female'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Жіноча
              </button>
            </div>
          </div>

          {/* Place Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Статус місця</label>
            <div className="flex flex-wrap gap-2">
              {['Вільне', 'Резерв', 'Зайняте', 'Під виселення'].map((status) => (
                <button
                  key={status}
                  onClick={() => togglePlaceStatus(status)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    placeStatus.includes(status)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Resident Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Тип мешканця</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Виберіть...</option>
              <option value="student">Студент</option>
              <option value="postgraduate">Аспірант</option>
              <option value="employee">Співробітник</option>
              <option value="foreign">Іноземний студент</option>
            </select>
          </div>

          {/* Room Number and Room Type */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Номер кімнати</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Виберіть...</option>
                <option value="101">101</option>
                <option value="102">102</option>
                <option value="103">103</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Тип кімнати</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Виберіть...</option>
                <option value="student">Студентська</option>
                <option value="family">Сімейна</option>
                <option value="work">Робоча</option>
                <option value="postgraduate">Аспірантська</option>
              </select>
            </div>
          </div>

          {/* Institute and Course */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Інститут</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Виберіть...</option>
                <option value="ipm">ІПМ</option>
                <option value="iee">ІЕЕ</option>
                <option value="ihf">ІХФ</option>
                <option value="its">ІТС</option>
                <option value="ibm">ІБМ</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Курс</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Виберіть...</option>
                <option value="1">1 курс</option>
                <option value="2">2 курс</option>
                <option value="3">3 курс</option>
                <option value="4">4 курс</option>
                <option value="5">5 курс</option>
              </select>
            </div>
          </div>

          {/* Room Conditions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Умови кімнати</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Виберіть...</option>
              <option value="good">Хороші</option>
              <option value="satisfactory">Задовільні</option>
              <option value="repair">Потребує ремонту</option>
              <option value="under-repair">Під ремонтом</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Скинути
          </button>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Відмінити
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Застосувати
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
