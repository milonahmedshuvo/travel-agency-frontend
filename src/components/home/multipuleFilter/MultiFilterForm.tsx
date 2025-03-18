"use client";

import { FC } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Select, Button, message } from "antd";
import { CheckCircleOutlined, StarOutlined, HeartOutlined } from "@ant-design/icons";

const { Option } = Select;

// Define TypeScript types
type FormValues = {
  category1: string;
  category2: string;
  category3: string;
  category4: string;
  category5: string;
};

const MultiSelectForm: FC = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      category1: "", // No default value
      category2: "", // No default value
      category3: "", // No default value
      category4: "", // No default value
      category5: "", // No default value
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Selected Values:", data);
    message.success("Form submitted successfully!");
  };

  return (
    <div className="p-6 bg-white rounded-lg custom-container ">
     

      <form onSubmit={handleSubmit(onSubmit)} className=" grid grid-cols-3 gap-5 justify-between items-center">
        {/* Category 1 */}
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <Controller
            name="category1"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                onChange={field.onChange}
                placeholder="Select Category 2"
                className="w-full"
                prefix={<CheckCircleOutlined className="mr-2 text-green-500" />}
              >
                <Option value="option1" label="Option 1">
                  <CheckCircleOutlined className="mr-2 text-green-500" /> Option 1
                </Option>
                <Option value="option2" label="Option 2">
                  <StarOutlined className="mr-2 text-yellow-500" /> Option 2
                </Option>
                <Option value="option3" label="Option 3">
                  <HeartOutlined className="mr-2 text-red-500" /> Option 3
                </Option>
              </Select>
            )}
          />
        </div>

        {/* Category 2 */}
        <div>
          <label className="block font-semibold mb-1">Category 2</label>
          <Controller
            name="category2"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                onChange={field.onChange}
                placeholder="Select Category 2"
                className="w-full"
                prefix={<StarOutlined className="mr-2 text-yellow-500" />}
              >
                <Option value="optionA" label="Option A">
                  <CheckCircleOutlined className="mr-2 text-green-500" /> Option A
                </Option>
                <Option value="optionB" label="Option B">
                  <StarOutlined className="mr-2 text-yellow-500" /> Option B
                </Option>
                <Option value="optionC" label="Option C">
                  <HeartOutlined className="mr-2 text-red-500" /> Option C
                </Option>
              </Select>
            )}
          />
        </div>

        {/* Category 3 */}
        <div>
          <label className="block font-semibold mb-1">Category 3</label>
          <Controller
            name="category3"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                onChange={field.onChange}
                placeholder="Select Category 3"
                className="w-full"
                prefix={<HeartOutlined className="mr-2 text-red-500" />}
              >
                <Option value="red" label="Red">
                  <HeartOutlined className="mr-2 text-red-500" /> Red
                </Option>
                <Option value="blue" label="Blue">
                  <CheckCircleOutlined className="mr-2 text-blue-500" /> Blue
                </Option>
                <Option value="green" label="Green">
                  <StarOutlined className="mr-2 text-green-500" /> Green
                </Option>
              </Select>
            )}
          />
        </div>

        {/* Category 4 */}
        <div>
          <label className="block font-semibold mb-1">Category 4</label>
          <Controller
            name="category4"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                onChange={field.onChange}
                placeholder="Select Category 4"
                className="w-full"
              >
                <Option value="small" label="Small">
                  Small
                </Option>
                <Option value="medium" label="Medium">
                  Medium
                </Option>
                <Option value="large" label="Large">
                  Large
                </Option>
              </Select>
            )}
          />
        </div>

        {/* Category 5 */}
        <div>
          <label className="block font-semibold mb-1">Category 5</label>
          <Controller
            name="category5"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                onChange={field.onChange}
                placeholder="Select Category 5"
                className="w-full"
              >
                <Option value="yes" label="Yes">
                  Yes
                </Option>
                <Option value="no" label="No">
                  No
                </Option>
              </Select>
            )}
          />
        </div>

        {/* Submit Button */}
        <Button type="primary" htmlType="submit" className="w-full mt-6">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default MultiSelectForm;
