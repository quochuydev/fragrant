import { noSSRWithLoadingDynamic } from "../../../../utils/dynamic.import";

export default noSSRWithLoadingDynamic(
  import("../../../../sites/publish/blogs/edit")
);
