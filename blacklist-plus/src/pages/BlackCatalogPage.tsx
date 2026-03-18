import BlackCatalogPageContent, {
  type BlackCatalogPageContentTexts,
} from "../components/BlackCatalogPageContent";

const texts: BlackCatalogPageContentTexts = {
  pageTitle: "Черный список",
  emptyStateTitle: "Черный список",
  emptyStateDescription:
    "Введите ФИО клиента (минимум 5 символов) для поиска в чёрном каталоге.",
  notFoundTitle: "Запись в чёрном каталоге не найдена",
  notFoundDescription: (query) =>
    `По вашему запросу "${query}" ничего не найдено.`,
  addButtonLabel: "+",
  addToCatalogLabel: "+ Добавить в чёрный каталог",
  deleteConfirmText: (fullname) =>
    `Вы уверены, что хотите удалить ${fullname} из чёрного каталога?`,
};

const BlackCatalogPage = ({ userId }: { userId: string }) => {
  return (
    <BlackCatalogPageContent
      texts={texts}
      showDebtSection={false}
      userId={userId}
    />
  );
};

export default BlackCatalogPage;
