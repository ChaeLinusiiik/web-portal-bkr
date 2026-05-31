import { Pencil, X } from 'lucide-react';
import React from 'react';

interface Room {
  roomNumber: string;
  bed: number;
  gender: string;
  fullName: string;
  institute: string;
  course: number;
  resident: string;
  roomType: string;
  status: string;
  notes: string;
}

const rooms: Room[] = [
  { roomNumber: '101', bed: 1, gender: 'Ч', fullName: 'Петренко Олександр Сергійович', institute: 'ІПМ', course: 2, resident: 'Студент', roomType: 'студентська', status: 'зайнято', notes: '' },
  { roomNumber: '101', bed: 2, gender: 'Ч', fullName: 'Коваленко Ігор Михайлович', institute: 'ІПМ', course: 2, resident: 'Студент', roomType: 'студентська', status: 'зайнято', notes: '' },
  { roomNumber: '101', bed: 3, gender: 'Ч', fullName: '', institute: '', course: 0, resident: '', roomType: 'студентська', status: 'вільно', notes: '' },
  { roomNumber: '101', bed: 4, gender: 'Ч', fullName: '', institute: '', course: 0, resident: '', roomType: 'студентська', status: 'вільно', notes: '' },
  { roomNumber: '102', bed: 1, gender: 'Ч', fullName: 'Шевченко Максим Вікторович', institute: 'ІЕЕ', course: 3, resident: 'Студент', roomType: 'студентська', status: 'зайнято', notes: '' },
  { roomNumber: '102', bed: 2, gender: 'Ч', fullName: '', institute: '', course: 0, resident: '', roomType: 'студентська', status: 'резерв', notes: 'Бронь до 01.09' },
  { roomNumber: '102', bed: 3, gender: 'Ч', fullName: '', institute: '', course: 0, resident: '', roomType: 'студентська', status: 'вільно', notes: '' },
  { roomNumber: '102', bed: 4, gender: 'Ч', fullName: '', institute: '', course: 0, resident: '', roomType: 'студентська', status: 'вільно', notes: '' },
  { roomNumber: '103', bed: 1, gender: 'Ж', fullName: '', institute: '', course: 0, resident: '', roomType: 'сімейна', status: 'під ремонт', notes: 'Ремонт до 15.06' },
  { roomNumber: '103', bed: 2, gender: 'Ж', fullName: '', institute: '', course: 0, resident: '', roomType: 'сімейна', status: 'під ремонт', notes: 'Ремонт до 15.06' },
];

const roomTypeBadgeColors: Record<string, string> = {
  'студентська': 'bg-blue-100 text-blue-700',
  'сімейна': 'bg-purple-100 text-purple-700',
  'робоча': 'bg-gray-100 text-gray-700',
  'аспірантська': 'bg-green-100 text-green-700',
  'для співробітників': 'bg-orange-100 text-orange-700',
  'для сторонніх': 'bg-yellow-100 text-yellow-700',
  'службова': 'bg-red-100 text-red-700',
  'іноземна': 'bg-indigo-100 text-indigo-700',
};

export function DormitoryDetails() {
  const renderRoomRow = (room: Room, index: number, isFirstInRoom: boolean) => {
    const isUnderRepair = room.status === 'під ремонт';
    const rowClass = isUnderRepair ? 'bg-[#f3c5b1]' : 'hover:bg-gray-50';

    return (
      <tr key={`${room.roomNumber}-${room.bed}`} className={rowClass}>
        {isFirstInRoom && (
          <td
            className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300"
            rowSpan={4}
          >
            {room.roomNumber}
          </td>
        )}
        <td className="px-4 py-3 text-sm text-gray-900">{room.bed}</td>
        <td className="px-4 py-3 text-sm text-gray-700">{room.gender}</td>
        <td className="px-4 py-3 text-sm text-gray-900">{room.fullName}</td>
        <td className="px-4 py-3 text-sm text-gray-700">{room.institute}</td>
        <td className="px-4 py-3 text-sm text-gray-700">{room.course || ''}</td>
        <td className="px-4 py-3 text-sm text-gray-700">{room.resident}</td>
        <td className="px-4 py-3">
          {room.roomType && (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${roomTypeBadgeColors[room.roomType] || 'bg-gray-100 text-gray-700'}`}>
              {room.roomType}
            </span>
          )}
        </td>
        <td className="px-4 py-3 text-sm text-gray-700">{room.status}</td>
        <td className="px-4 py-3 text-sm text-gray-500">{room.notes}</td>
        <td className="px-4 py-3">
          <div className="flex items-center gap-2">
            <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
              <Pencil className="w-4 h-4" />
            </button>
            <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        </td>
      </tr>
    );
  };

  const groupedRooms: { [key: string]: Room[] } = {};
  rooms.forEach(room => {
    if (!groupedRooms[room.roomNumber]) {
      groupedRooms[room.roomNumber] = [];
    }
    groupedRooms[room.roomNumber].push(room);
  });

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Гуртожиток №8</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          {['Всі поверхи', '1 пов.', '2 пов.', '3 пов.', '4 пов.', '5 пов.'].map((floor, index) => (
            <button
              key={floor}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                index === 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {floor}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="flex gap-4 mb-4">
          <div className="px-4 py-2 bg-blue-50 rounded-lg">
            <span className="text-sm font-medium text-gray-600">Зайнято: </span>
            <span className="text-sm font-semibold text-gray-900">741</span>
          </div>
          <div className="px-4 py-2 bg-orange-50 rounded-lg">
            <span className="text-sm font-medium text-gray-600">Резерв: </span>
            <span className="text-sm font-semibold text-gray-900">20</span>
          </div>
          <div className="px-4 py-2 bg-green-50 rounded-lg">
            <span className="text-sm font-medium text-gray-600">Вільно: </span>
            <span className="text-sm font-semibold text-gray-900">239</span>
          </div>
          <div className="px-4 py-2 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-600">Всього: </span>
            <span className="text-sm font-semibold text-gray-900">1000</span>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md">
            Таблиця
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50">
            Візуалізація
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300">Кімната</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Місце</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Стать</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ПІБ</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ННІ</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Курс</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Мешканець</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Тип кімнати</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Статус</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Примітки</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дії</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupedRooms).map(([roomNumber, roomBeds], groupIndex) => (
              <React.Fragment key={roomNumber}>
                {roomBeds.map((room, bedIndex) =>
                  renderRoomRow(room, bedIndex, bedIndex === 0)
                )}
                {groupIndex < Object.keys(groupedRooms).length - 1 && (
                  <tr>
                    <td colSpan={11} className="border-t-2 border-gray-300"></td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
