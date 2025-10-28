import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Header } from '../../../components/Header';
import { FormHelper } from '../../../components/FormHelper';

export const Register = () => {
  const [formData, setFormData] = useState({
    document_number: '',
    name: '',
    paternal_lastname: '',
    maternal_lastname: '',
    email: '',
    phone: '',
    user_name: '',
    password: '',
    document_type_id: 1,
    country_id: 179
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const dataToSend = { ...formData, last_session: new Date().toISOString().split('T')[0], account_statement: true };
      await register(dataToSend);
      alert('¡Registro exitoso! Ahora puedes iniciar sesión');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al registrar');
    } finally {
      setLoading(false);
    }
  };

  const getPasswordStrength = (pwd) => {
    let score = 0;
    if (!pwd) return { score, label: 'Muy débil', color: 'bg-red-400', width: 'w-0' };
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    const map = {
      0: ['Muy débil', 'bg-red-400', 'w-1/4'],
      1: ['Débil', 'bg-amber-400', 'w-1/4'],
      2: ['Aceptable', 'bg-yellow-400', 'w-2/4'],
      3: ['Buena', 'bg-green-400', 'w-3/4'],
      4: ['Excelente', 'bg-green-600', 'w-full']
    };

    return { score, label: map[score][0], color: map[score][1], width: map[score][2] };
  };

  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-6 bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="bg-white rounded-3xl shadow-soft-xl overflow-hidden w-full max-w-6xl grid grid-cols-1 md:grid-cols-2">
          <aside className="hidden md:flex items-stretch justify-center p-6 bg-gradient-to-br from-ocean-700 to-ocean-400 text-white">
            <div className="max-w-sm w-full">
              <h2 className="text-3xl font-bold mb-2">Crea tu cuenta</h2>
              <p className="text-sm opacity-95 mb-4">Regístrate para acceder a recursos y guías rápidas.</p>
              <FormHelper
                title="Antes de empezar"
                items={[
                  { title: 'Prepara tu documento', detail: 'Ten a la mano tu número de documento y teléfono.' },
                  { title: 'Usuario único', detail: 'Elige un nombre de usuario fácil de recordar.' },
                  { title: 'Contraseña segura', detail: 'Usa 8+ caracteres con números y símbolos.' }
                ]}
              />
            </div>
          </aside>

          <section className="p-8">
            <div className="mx-auto w-full max-w-2xl">
              <h1 className="text-2xl font-extrabold text-gray-800 mb-6 text-center">Crear Cuenta</h1>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Nombre</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-300 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Usuario</label>
                    <input type="text" name="user_name" value={formData.user_name} onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-300 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Apellido Paterno</label>
                    <input type="text" name="paternal_lastname" value={formData.paternal_lastname} onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-300 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Apellido Materno</label>
                    <input type="text" name="maternal_lastname" value={formData.maternal_lastname} onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-300 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-300 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Teléfono</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-300 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">N° Documento</label>
                    <input type="text" name="document_number" value={formData.document_number} onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-300 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Contraseña</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-300 outline-none" required minLength={8} />
                    <div className="mt-2">
                      {/* barra de fuerza */}
                      {(() => {
                        const ps = getPasswordStrength(formData.password);
                        return (
                          <div>
                            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                              <div className={`${ps.color} ${ps.width} h-2 transition-all`} />
                            </div>
                            <div className="text-xs text-gray-700 mt-1">Fuerza: <span className="font-medium">{ps.label}</span></div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </div>

                {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>}

                <button type="submit" disabled={loading}
                  className="w-full bg-gradient-to-r from-warm-500 to-accent-500 hover:from-warm-600 hover:to-accent-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50">
                  {loading ? 'Registrando...' : 'Registrarse'}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-gray-700">¿Ya tienes cuenta?{' '}
                <Link to="/login" className="text-accent-700 font-medium">Inicia sesión</Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};