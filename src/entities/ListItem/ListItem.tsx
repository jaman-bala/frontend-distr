interface ListItemProps {
  name: string;
  count: string;
  img: string;
  anchor: string;
}

const linkBase = "https://distr-cloud.tsvs.kg/";

const ListItem = (props: ListItemProps) => {
  const { name, count, img, anchor } = props;
  return (
    <div className="w-3/4 border-b-2 border-b-black flex items-center">
      <p className="mr-4 text-center w-7 font-bold">{count}.</p>
      <div className="rounded-full bg-zinc-50 w-8 h-8 mr-5 justify-start overflow-hidden border-2 border-black">
        <img
          src={linkBase + img}
          alt="logo of program"
          className="object-cover w-full h-full"
        />
      </div>
      <p className="mr-auto">{name}</p>
      <a
        className="bg-lime-400 p-2 rounded-sm mr-3 cursor-pointer"
        href={linkBase + anchor}
        target="_blank"
      >
        Скачать
      </a>
    </div>
  );
};

export default ListItem;
