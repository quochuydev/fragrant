import React from "react";
import dynamic from "next/dynamic";

export const noSSRWithLoadingDynamic = (component) => {
  return dynamic(() => component, {
    ssr: false,
    loading: () => <div />,
  });
};

export default noSSRWithLoadingDynamic(
  import("../../client/admin/blogs/index.tsx")
);
