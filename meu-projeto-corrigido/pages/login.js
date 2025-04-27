import React from 'react';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="max-w-md mx-auto">
      <div className="card">
        <h1 className="text-2xl font-bold text-center text-[#0f2b5b] mb-6">Login</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              id="email" 
              className="form-input" 
              placeholder="seu.email@rotunnocidadania.com.br" 
              required 
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label">Senha</label>
            <input 
              type="password" 
              id="password" 
              className="form-input" 
              placeholder="••••••••" 
              required 
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input 
                id="remember" 
                type="checkbox" 
                className="h-4 w-4 text-[#0f2b5b] focus:ring-[#3b82f6] border-gray-300 rounded" 
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Lembrar-me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-[#3b82f6] hover:underline">
                Esqueceu a senha?
              </a>
            </div>
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full btn-primary"
            >
              Entrar
            </button>
          </div>
        </form>
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Esta plataforma é exclusiva para usuários autorizados da Rotunno Cidadania.
          </p>
        </div>
      </div>
    </div>
  );
}
