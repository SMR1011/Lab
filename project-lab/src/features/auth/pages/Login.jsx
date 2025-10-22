import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Header } from '../../../components/Header';

export const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(formData);
      navigate('/profile');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-6 bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="bg-white rounded-3xl shadow-soft-xl overflow-hidden w-full max-w-5xl grid grid-cols-1 md:grid-cols-2">
          <aside className="hidden md:flex items-center justify-center p-10 bg-gradient-to-br from-accent-500 to-accent-300 text-white">
            <div className="max-w-sm">
              <h2 className="text-3xl font-bold mb-4">Bienvenido de nuevo</h2>
              <p className="text-sm opacity-90">Accede para ver tu perfil, guías rápidas y recursos.</p>
            </div>
          </aside>

          <section className="p-8">
            <div className="mx-auto w-full max-w-md">
              <h1 className="text-2xl font-extrabold text-gray-800 mb-6 text-center">Iniciar Sesión</h1>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-300 outline-none"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-300 outline-none"
                    placeholder="••••••••"
                    required
                  />
                </div>

                {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-accent-500 to-warm-500 hover:from-accent-600 hover:to-warm-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
                >
                  {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-gray-600">¿No tienes cuenta?{' '}
                <Link to="/register" className="text-accent-700 font-medium">Regístrate aquí</Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};