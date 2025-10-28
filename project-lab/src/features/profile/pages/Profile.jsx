import { useAuth } from '../../auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../components/Header';
import { DidacticCard } from '../../../components/DidacticCard';

export const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (!user) {
    return <div className="p-8 text-center">Cargando perfil...</div>;
  }

  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-brand-50 to-accent-50 p-6">
        <div className="max-w-6xl mx-auto pt-8">
          <div className="bg-white rounded-2xl shadow-soft-xl overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-ocean-600 to-ocean-400 text-white">
              <h1 className="text-3xl font-bold mb-2">Mi Perfil</h1>
              <p className="text-white/90">Información de tu cuenta</p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-1">Nombre Completo</p>
                      <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-1">Usuario</p>
                      <p className="text-lg font-semibold text-gray-800">{user.user_name}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-1">Email</p>
                      <p className="text-lg font-semibold text-gray-800">{user.email}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-1">Teléfono</p>
                      <p className="text-lg font-semibold text-gray-800">{user.phone}</p>
                    </div>
                    {user.role && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700 mb-1">Rol</p>
                        <p className="text-lg font-semibold text-gray-800">{user.role.name}</p>
                      </div>
                    )}
                    {user.country && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700 mb-1">País</p>
                        <p className="text-lg font-semibold text-gray-800">{user.country.name}</p>
                      </div>
                    )}
                  </div>
                </div>

                <aside className="lg:col-span-1">
                  <DidacticCard
                    title="Primeros pasos"
                    description="Acciones recomendadas para empezar a usar tu cuenta"
                    steps={[
                      { title: 'Revisa tu perfil', detail: 'Asegúrate de que tu información esté actualizada.' },
                      { title: 'Visita la guía', detail: 'Revisa la Guía rápida para aprender funciones clave.' },
                      { title: 'Seguridad', detail: 'Cambia tu contraseña periódicamente y usa contraseñas fuertes.' }
                    ]}
                  />
                </aside>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-1">Nombre Completo</p>
                  <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-1">Usuario</p>
                  <p className="text-lg font-semibold text-gray-800">{user.user_name}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-1">Email</p>
                  <p className="text-lg font-semibold text-gray-800">{user.email}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-1">Teléfono</p>
                  <p className="text-lg font-semibold text-gray-800">{user.phone}</p>
                </div>
                {user.role && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700 mb-1">Rol</p>
                    <p className="text-lg font-semibold text-gray-800">{user.role.name}</p>
                  </div>
                )}
                {user.country && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700 mb-1">País</p>
                    <p className="text-lg font-semibold text-gray-800">{user.country.name}</p>
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-center">
                <button onClick={handleLogout}
                  className="bg-warm-500 hover:bg-warm-600 text-white font-semibold px-8 py-3 rounded-lg transition">
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};