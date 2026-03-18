import BlackCatalogPageContent, {
  type BlackCatalogPageContentTexts,
} from "../components/BlackCatalogPageContent";

const texts: BlackCatalogPageContentTexts = {
  pageTitle: "Оформленные",
  emptyStateTitle: "Оформленные",
  emptyStateDescription:
    "Введите ФИО клиента (минимум 5 символов) для поиска оформленных.",
  notFoundTitle: "Запись не найдена",
  notFoundDescription: (query) =>
    `По вашему запросу "${query}" ничего не найдено.`,
  addButtonLabel: "+",
  addToCatalogLabel: "+ Добавить оформленного",
  deleteConfirmText: (fullname) =>
    `Вы уверены, что хотите удалить ${fullname} из оформленных?`,
};

const FormattedCatalogPage = ({ userId }: { userId: string }) => {
  return (
    <BlackCatalogPageContent
      texts={texts}
      showDebtSection
      requireDebtDate
      userId={userId}
    />
  );
};

export default FormattedCatalogPage;
