import React from "react";

export const Product_Card = (props) => {
  const set_data_handle = () => {
    props.click_handle({
      ...props,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      ",
    });
  };
  return (
    <div onClick={set_data_handle} className="flex justify-center max-w-sm ">
      <div className="cursor-pointer hover:scale-y-110 rounded-xl">
        <img className="w-52" src={props.image_url} alt="" />

        <div className="flex flex-col">
          <h1 className="ms-3">Title</h1>
          <h1 className="ms-3">{props.title}</h1>
          <h1 className="ms-3">${props.price}</h1>
        </div>
      </div>
    </div>
  );
};