import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";

const MenuSection = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Menu</h2>
        <FormDescription>Create your menu with name and price</FormDescription>
        <FormField
          control={control}
          name="menuItems"
          render={() => (
            <FormItem className="flex flex-col gap-2">
              {fields.map((_, index) => (
                <MenuItemInput
                  index={index}
                  removeMenuItem={() => {
                    remove(index);
                  }}
                />
              ))}
            </FormItem>
          )}
        />
        <Button className="my-2" type="button" onClick={() => append({ name: "", price: "" })}>
          Add Menu Item
        </Button>
      </div>
    </div>
  );
};

export default MenuSection;
