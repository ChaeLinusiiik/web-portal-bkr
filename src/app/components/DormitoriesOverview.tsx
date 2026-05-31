import { Download } from 'lucide-react';

interface Dormitory {
  id: number;
  address: string;
  manager: string;
  phone: string;
  total: number;
  occupied: number;
  free: number;
  reserved: number;
  repair: number;
}

const dormitories: Dormitory[] = [
  { id: 1, address: 'вул. Наукова, 14а', manager: 'Петренко О.М.', phone: '+380 50 123 4567', total: 500, occupied: 380, free: 100, reserved: 15, repair: 5 },
  { id: 2, address: 'вул. Інженерна, 5', manager: 'Коваленко І.П.', phone: '+380 67 234 5678', total: 400, occupied: 320, free: 60, reserved: 10, repair: 10 },
  { id: 3, address: 'вул. Студентська, 8', manager: 'Шевченко М.В.', phone: '+380 63 345 6789', total: 450, occupied: 350, free: 80, reserved: 12, repair: 8 },
  { id: 4, address: 'просп. Перемоги, 37', manager: 'Мельник Г.С.', phone: '+380 50 456 7890', total: 600, occupied: 480, free: 100, reserved: 15, repair: 5 },
  { id: 5, address: 'вул. Політехнічна, 23', manager: 'Бондаренко В.К.', phone: '+380 67 567 8901', total: 550, occupied: 430, free: 95, reserved: 18, repair: 7 },
  { id: 6, address: 'вул. Кампусна, 12', manager: 'Ткаченко Н.Р.', phone: '+380 63 678 9012', total: 700, occupied: 560, free: 120, reserved: 12, repair: 8 },
  { id: 7, address: 'вул. Академічна, 45', manager: 'Лисенко О.О.', phone: '+380 50 789 0123', total: 480, occupied: 390, free: 70, reserved: 14, repair: 6 },
  { id: 8, address: 'вул. Дружби народів, 18', manager: 'Савченко Т.Л.', phone: '+380 67 890 1234', total: 1000, occupied: 741, free: 239, reserved: 20, repair: 0 },
];

export function DormitoriesOverview() {
  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Огляд гуртожитків</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          <Download className="w-4 h-4" />
          Експортувати
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">№</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Адреса</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Комендант</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Телефон</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Всього місць</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Зайнято</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Вільно</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Резерв</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Під ремонт</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dormitories.map((dorm, index) => (
              <tr
                key={dorm.id}
                className="hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <td className="px-4 py-3 text-sm text-gray-900">{dorm.id}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{dorm.address}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{dorm.manager}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{dorm.phone}</td>
                <td className="px-4 py-3 text-sm text-gray-900 text-right">{dorm.total}</td>
                <td className="px-4 py-3 text-sm text-gray-900 text-right">{dorm.occupied}</td>
                <td className="px-4 py-3 text-sm text-gray-900 text-right">{dorm.free}</td>
                <td className="px-4 py-3 text-sm text-gray-900 text-right">{dorm.reserved}</td>
                <td className="px-4 py-3 text-sm text-gray-900 text-right">{dorm.repair}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
