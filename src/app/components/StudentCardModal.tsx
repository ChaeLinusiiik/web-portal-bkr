import { X } from 'lucide-react';

interface StudentCardModalProps {
  onClose: () => void;
}

export function StudentCardModal({ onClose }: StudentCardModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Іваненко Марія Петрівна</h2>
              <p className="text-sm text-gray-500 mt-1">Жіноча</p>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mt-4 border-b border-gray-200 -mb-px">
            {['Персональне', 'Навчання', 'Оплата', 'Історія поселення', 'Журнал змін'].map((tab, index) => (
              <button
                key={tab}
                className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
                  index === 0
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Контактна інформація</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Номер телефону:</span>
                <span className="text-sm text-gray-900 font-medium">+380 50 123 4567</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Особистий email:</span>
                <span className="text-sm text-gray-900 font-medium">maria.ivanenko@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Студентський email:</span>
                <span className="text-sm text-gray-900 font-medium">maria.ivanenko@student.university.edu</span>
              </div>
            </div>
          </div>

          {/* Registration Address */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Прописка</h3>
            <p className="text-sm text-gray-700">
              Україна, м. Київ, вул. Хрещатик, буд. 15, кв. 42
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Пільги</h3>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-700">
                Сирота
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                Відмінник
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-700">
                Активіст
              </span>
            </div>
          </div>

          {/* Personal Details */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Персональні дані</h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              <div>
                <span className="text-sm text-gray-600">Дата народження:</span>
                <p className="text-sm text-gray-900 font-medium">15.03.2004</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Громадянство:</span>
                <p className="text-sm text-gray-900 font-medium">Україна</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Паспорт:</span>
                <p className="text-sm text-gray-900 font-medium">РР №123456</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">ІПН:</span>
                <p className="text-sm text-gray-900 font-medium">1234567890</p>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Контакт для екстрених випадків</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">ПІБ:</span>
                <span className="text-sm text-gray-900 font-medium">Іваненко Петро Олександрович</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Відношення:</span>
                <span className="text-sm text-gray-900 font-medium">Батько</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Телефон:</span>
                <span className="text-sm text-gray-900 font-medium">+380 67 234 5678</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Закрити
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
            Зберегти зміни
          </button>
        </div>
      </div>
    </div>
  );
}
