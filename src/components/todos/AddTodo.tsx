import { createTodo } from "@/actions";
import Button from "@/components/button/Button";
import Form from "@/components/form/Form";
import Input from "@/components/input/Input";

const AddTodo = () => {
  return (
    <div>
      <Form action={createTodo}>
        <div className="flex gap-4 items-center">
          <Input name="input" type="text" placeholder="Add Todo Here..." />
          <Button type="submit" text="Add" bgColor="bg-blue-600" />
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;
