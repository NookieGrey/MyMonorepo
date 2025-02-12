import { Button, Form, Input, Radio, Select, Typography } from "antd";
import {
  BookDto,
  useFindAllGenreQuery,
  useSaveBookMutation,
} from "../../services/api/sharebookApi.ts";
import { BackIcon } from "../../components/Header/svg/BackIcon.tsx";
import styles from "./createBook.module.scss";
import { CheckboxGroupProps } from "antd/es/checkbox/Group";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const options: CheckboxGroupProps<string>["options"] = [
  { label: "Хорошее", value: "good" },
  { label: "Нормальное", value: "normal" },
  { label: "Плохое", value: "bad" },
];

export function CreateBook() {
  const [form] = Form.useForm<BookDto>();
  const [save] = useSaveBookMutation();
  const { i18n } = useTranslation();
  const { data: genres, isLoading: genresLoading } = useFindAllGenreQuery({
    locale: i18n.language.split("-")[0],
  });

  async function handleFinish(values: BookDto) {
    try {
      save({ bookDto: values }).unwrap();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Button
        shape="circle"
        icon={<BackIcon />}
        className={styles.backButton}
      />

      <div className={styles.container}>
        <h1 className={styles.title}>Новое объявление</h1>
        <Form
          form={form}
          layout="vertical"
          initialValues={{ condition: "good" }}
          onFinish={handleFinish}
          className={styles.form}
          requiredMark={false}
        >
          <Form.Item
            label="Название книги"
            name="title"
            rules={[
              { required: true, message: "Пожалуйста, введите название книги" },
            ]}
          >
            <Input placeholder="Евгений Онегин" />
          </Form.Item>

          <Form.Item
            label="Автор"
            name="author"
            rules={[
              { required: true, message: "Пожалуйста, введите имя автора" },
            ]}
          >
            <Input placeholder="Александр Пушкин" />
          </Form.Item>

          <Form.Item label="Жанр" name="genre">
            {/* <Input placeholder="Роман" /> */}
            <Select
              loading={genresLoading}
              options={genres?.map((genre) => ({
                value: genre.id,
                label: genre.name,
              }))}
              placeholder="Роман"
              className={styles.select}
            />
          </Form.Item>

          <Form.Item label="Язык книги" name="language">
            <Input placeholder="Русский" />
          </Form.Item>

          <Form.Item label="Издательство" name="publishingHouse">
            <Input placeholder="АСТ" />
          </Form.Item>

          <Form.Item label="Год издания" name="year">
            <Input type="number" placeholder="1994" />
          </Form.Item>

          <Form.Item label="Состояние" name="condition">
            <Radio.Group
              block
              options={options}
              optionType="button"
              buttonStyle="solid"
              className={styles.condition}
            />
          </Form.Item>

          <Form.Item label="Описание" name="description">
            <Input.TextArea
              className={styles.description}
              rows={3}
              placeholder="Книга 1997 года издания..."
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.submit}>
              Разместить объявление
            </Button>
          </Form.Item>
        </Form>

        <Typography.Text className={styles.rules}>
          <span>Выкладывая объявление вы соглашаетесь с </span>
          <Link to="#">правилами ShareBook</Link>
        </Typography.Text>
      </div>
    </div>
  );
}
