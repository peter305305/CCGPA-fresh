import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Lobby', to: '/dashboard' },
  { label: 'Residence', to: '/house-info' },
  { label: 'Set Times', to: '/set-times' },
  { label: 'Weather', to: '/weather' },
];

export default function TopNav() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
      <div className="lux-pill">Private Residence</div>
      <div className="flex flex-wrap items-center gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                isActive
                  ? 'border-gold-400/70 bg-white/10 text-white'
                  : 'border-white/10 text-indigo-100/70 hover:border-white/30 hover:text-white'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
