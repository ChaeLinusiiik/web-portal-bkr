import { Search, Filter, Download, Play } from 'lucide-react';
import { useState } from 'react';
import { FiltersModal } from './FiltersModal';

interface Application {
  id: number;
  fullName: string;
  gender: string;
  dormitory: string;
  roomNumber: string;
  institute: string;
  course: number;
  rating: number;
  status: string;
  benefits: string[];
  applicationDate: string;
}

const applications: Application[] = [
  { id: 1, fullName: 'Іваненко Марія Петрівна', gender: 'Ж', dormitory: 'Гуртожиток №3', roomNumber: '205', institute: 'ІПМ', course: 3, rating: 4.8, status: 'на розгляді', benefits: ['Сирота'], applicationDate: '12.05.2026' },
  { id: 2, fullName: 'Коваль Андрій Олександрович', gender: 'Ч', dormitory: 'Гуртожиток №8', roomNumber: '412', institute: 'ІЕЕ', course: 2, rating: 4.5, status: 'схвалено', benefits: [], applicationDate: '15.05.2026' },
  { id: 3, fullName: 'Сидоренко Олена Василівна', gender: 'Ж', dormitory: 'Гуртожиток №5', roomNumber: '308', institute: 'ІХФ', course: 4, rating: 4.9, status: 'на розгляді', benefits: ['Інвалід', 'Пільговик'], applicationDate: '18.05.2026' },
  { id: 4, fullName: 'Петренко Дмитро Сергійович', gender: 'Ч', dormitory: 'Гуртожиток №2', roomNumber: '115', institute: 'ІТС', course: 1, rating: 4.2, status: 'відхилено', benefits: [], applicationDate: '20.05.2026' },
  { id: 5, fullName: 'Мельник Анна Іванівна', gender: 'Ж', dormitory: 'Гуртожиток №7', roomNumber: '501', institute: 'ІБМ', course: 3, rating: 4.7, status: 'схвалено', benefits: ['Чорнобилець'], applicationDate: '22.05.2026' },
  { id: 6, fullName: 'Ковальчук Ігор Миколайович', gender: 'Ч', dormitory: 'Гуртожиток №4', roomNumber: '220', institute: 'ІПМ', course: 2, rating: 4.4, status: 'на розгляді', benefits: [], applicationDate: '24.05.2026' },
  { id: 7, fullName: 'Бондаренко Катерина Олегівна', gender: 'Ж', dormitory: 'Гуртожиток №6', roomNumber: '312', institute: 'ІЕЕ', course: 4, rating: 4.6, status: 'схвалено', benefits: ['Багатодітна сім\'я'], applicationDate: '25.05.2026' },
  { id: 8, fullName: 'Ткаченко Василь Володимирович', gender: 'Ч', dormitory: 'Гуртожиток №1', roomNumber: '103', institute: 'ІХФ', course: 1, rating: 4.1, status: 'на розгляді', benefits: [], applicationDate: '27.05.2026' },
];

const statusColors: Record<string, string> = {
  'на розгляді': 'bg-yellow-100 text-yellow-700',
  'схвалено': 'bg-green-100 text-green-700',
  'відхилено': 'bg-red-100 text-red-700',
};

export function RelocationPage() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="p-6">
      {/* Action Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Пошук за ПІБ..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setIsFiltersOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Фільтри
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            Експортувати
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            <Play className="w-4 h-4" />
            Запустити симуляцію
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">№</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ПІБ</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Стать</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Гуртожиток</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">№ кімнати</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Інститут</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Курс</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Рейтинг</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Статус</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Пільги</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дата заявки</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {applications.map((app) => (
              <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-900">{app.id}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{app.fullName}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{app.gender}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{app.dormitory}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{app.roomNumber}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{app.institute}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{app.course}</td>
                <td className="px-4 py-3 text-sm text-gray-900 font-medium">{app.rating}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[app.status]}`}>
                    {app.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {app.benefits.map((benefit, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-700">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{app.applicationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {isFiltersOpen && <FiltersModal onClose={() => setIsFiltersOpen(false)} />}
    </div>
  );
}
