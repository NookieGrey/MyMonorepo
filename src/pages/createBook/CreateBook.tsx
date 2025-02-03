import { Button, Form, Input } from "antd";
import {
  BookDto,
  useSaveBookMutation,
} from "../../services/api/sharebookApi.ts";
import styles from "./createBook.module.scss";

export function CreateBook() {
  const [form] = Form.useForm<BookDto>();
  const [save] = useSaveBookMutation();

  async function handleFinish(values: BookDto) {
    try {
      save({ bookDto: values }).unwrap();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{}}
      onFinish={handleFinish}
      className={styles.wrapper}
    >
      <Form.Item
        label="Название"
        name="title"
        rules={[
          { required: true, message: "Пожалуйста, введите название книги" },
        ]}
      >
        <Input placeholder="Введите название книги" />
      </Form.Item>

      <Form.Item
        label="Автор"
        name="author"
        rules={[{ required: true, message: "Пожалуйста, введите имя автора" }]}
      >
        <Input placeholder="Введите имя автора" />
      </Form.Item>

      <Form.Item label="Жанр" name="genre">
        <Input placeholder="Введите жанр книги (необязательно)" />
      </Form.Item>

      <Form.Item label="Издательство" name="publishingHouse">
        <Input placeholder="Введите издательство (необязательно)" />
      </Form.Item>

      <Form.Item label="Год издания" name="year">
        <Input
          type="number"
          placeholder="Введите год издания (необязательно)"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
}
