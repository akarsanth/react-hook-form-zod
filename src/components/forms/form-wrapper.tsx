interface Props {
  title: string;
  children: React.ReactNode;
}

export const FormWrapper = ({ title, children }: Props) => {
  return (
    <div className="max-w-screen-sm sm:border sm:rounded-lg sm:p-5">
      <h2 className="text-2xl font-semibold mb-8">{title}</h2>
      {children}
    </div>
  );
};
