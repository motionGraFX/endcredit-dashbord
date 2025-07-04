
export function Button({ children, className, icon }) {
  return <button className={`px-4 py-2 rounded-xl shadow ${className}`}>{icon} {children}</button>;
}
