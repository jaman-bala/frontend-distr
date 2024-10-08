interface ListCategoryProps {
  name: string;
}
const ListCategory = (props: ListCategoryProps) => {
  const { name } = props;
  return (
    <div className="w-3/4 h-12 flex items-center bg-lime-200 font-bold text-3xl pl-6">
      {name}
    </div>
  );
};

export default ListCategory;
