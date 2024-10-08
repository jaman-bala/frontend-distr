import React, { useEffect, useState } from "react";
import ListCategory from "@/entities/ListCategory/ListCategory";
import ListItem from "@/entities/ListItem/ListItem";

interface Item {
  category_id: number;
  id: number;
  title: string;
  logo: string;
  file: string;
}

interface Category {
  id: number;
  title: string;
  slug: string;
}

interface CategoryWithItems extends Category {
  items: Item[];
}

export const MainPage: React.FC = () => {
  const [data, setData] = useState<CategoryWithItems[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemsResponse, categoriesResponse] = await Promise.all([
          fetch("https://distr-cloud.tsvs.kg/api/distr"),
          fetch("https://distr-cloud.tsvs.kg/api/categories"),
        ]);

        const items: Item[] = await itemsResponse.json();
        const categories: Category[] = await categoriesResponse.json();

        const groupedData: CategoryWithItems[] = categories.map((category) => ({
          ...category,
          items: items.filter((item) => item.category_id === category.id),
        }));

        setData(groupedData);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col h-full">
      <div className="w-3/4 h-52 flex flex-col justify-center items-center">
        <img className="w-14 h-14" src="logo.png" alt="logo" />
        <p className="w-2/4 font-bold text-center text-xl">
          Государственное агентство по регистрации транспортных средств и
          водительского состава при Кабинете Министров Кыргызской Республики
        </p>
      </div>
      {data
        .filter((category) => category.items.length > 0)
        .map((category) => (
          <React.Fragment key={category.id}>
            <ListCategory name={category.title} />
            {category.items.map((item) => (
              <ListItem
                key={item.id}
                count={item.id.toString()}
                name={item.title}
                anchor={item.file}
                img={item.logo}
              />
            ))}
          </React.Fragment>
        ))}
    </div>
  );
};
