interface CustomHeaderProps {
  tittle: string;
  description?: string;
}

export const CustomHeader = ({ tittle, description }: CustomHeaderProps) => {
  return (
    <div className="content-center">
      <h1>{tittle}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};
