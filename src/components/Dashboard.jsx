import React from "react";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-medium text-gray-700">Total des Utilisateurs</h2>
          <p className="mt-2 text-3xl font-bold text-teal-500">1,024</p>
          <p className="text-sm text-gray-500">Comparé au mois dernier</p>
        </div>

        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-medium text-gray-700">Revenus</h2>
          <p className="mt-2 text-3xl font-bold text-teal-500">$12,345</p>
          <p className="text-sm text-gray-500">Mis à jour aujourd'hui</p>
        </div>

        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-medium text-gray-700">Commandes</h2>
          <p className="mt-2 text-3xl font-bold text-teal-500">456</p>
          <p className="text-sm text-gray-500">En attente de traitement</p>
        </div>

        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-medium text-gray-700">Taux de Conversion</h2>
          <p className="mt-2 text-3xl font-bold text-teal-500">3.5%</p>
          <p className="text-sm text-gray-500">Tendance actuelle</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Statistiques récentes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-left text-gray-600 font-medium">Nom</th>
                <th className="px-4 py-2 border-b text-left text-gray-600 font-medium">Email</th>
                <th className="px-4 py-2 border-b text-left text-gray-600 font-medium">Rôle</th>
                <th className="px-4 py-2 border-b text-left text-gray-600 font-medium">Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b text-gray-700">John Doe</td>
                <td className="px-4 py-2 border-b text-gray-700">john@example.com</td>
                <td className="px-4 py-2 border-b text-gray-700">Admin</td>
                <td className="px-4 py-2 border-b text-green-500 font-medium">Actif</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b text-gray-700">Jane Smith</td>
                <td className="px-4 py-2 border-b text-gray-700">jane@example.com</td>
                <td className="px-4 py-2 border-b text-gray-700">Utilisateur</td>
                <td className="px-4 py-2 border-b text-red-500 font-medium">Inactif</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b text-gray-700">Alice Johnson</td>
                <td className="px-4 py-2 border-b text-gray-700">alice@example.com</td>
                <td className="px-4 py-2 border-b text-gray-700">Éditeur</td>
                <td className="px-4 py-2 border-b text-green-500 font-medium">Actif</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
