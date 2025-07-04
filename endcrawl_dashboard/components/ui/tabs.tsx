
export function Tabs({ children }) {
  return <div>{children}</div>;
}
export function TabsList({ children, className }) {
  return <div className={`flex gap-2 mb-4 ${className}`}>{children}</div>;
}
export function TabsTrigger({ children, value }) {
  return <button className="px-4 py-2 bg-gray-200 rounded">{children}</button>;
}
export function TabsContent({ children, value }) {
  return <div>{children}</div>;
}
