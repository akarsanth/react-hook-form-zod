interface Props {
  label: string;
  children: React.ReactNode;
}

export const FormWrapper = ({ label, children }: Props) => {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8">{label}</h2>
      {children}
    </div>
  );
};