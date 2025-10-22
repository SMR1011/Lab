import { useAuth } from '../../auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../components/Header';

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
            <div className="p-8 bg-gradient-to-r from-accent-500 to-warm-500 text-white">
              <h1 className="text-3xl font-bold mb-2">Mi Perfil</h1>
              <p className="text-white/90">Información de tu cuenta</p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Nombre Completo</p>
                  <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Usuario</p>
                  <p className="text-lg font-semibold text-gray-800">{user.user_name}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <p className="text-lg font-semibold text-gray-800">{user.email}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Teléfono</p>
                  <p className="text-lg font-semibold text-gray-800">{user.phone}</p>
                </div>
                {user.role && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Rol</p>
                    <p className="text-lg font-semibold text-gray-800">{user.role.name}</p>
                  </div>
                )}
                {user.country && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">País</p>
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