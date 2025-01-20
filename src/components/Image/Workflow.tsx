import { FC } from "react";
import { IMAGE } from "../../type";

type Props = {
  item: IMAGE;
};

const WorkflowItem: FC<Props> = ({ item }) => {
  return (
    <li className="w-20">
      <div className="codeblaze-ipyiqq-container w-20 flex-shrink-0">
        <div
          className="codeblaze-6zv0y codeblaze-19ic1qi codeblaze-v-g7w011 border border-solid border-[#0f0f0f] rounded-[10px] shadow-lg w-full h-full hover:border-[#70befa]"
          data-border="true"
          data-codeblaze-name="OpenAI"
        >
          <div
            className="codeblaze-dcbepv opacity-30 transform translate-x-[-50%] translate-y-[-50%]"
            data-codeblaze-name="Logo"
          >
            <div
              className="absolute top-0 right-0 bottom-0 left-0 rounded-[inherit]"
              data-codeblaze-background-image-wrapper="true"
            >
              <img
                decoding="async"
                srcSet={item.srcSet}
                src={item.image}
                alt={item.alt}
                className="block w-full h-full rounded-[inherit] object-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default WorkflowItem;
