import DetailHeader from "./DetailHeader";
import DetailTabs from "./DetailTabs";
import DetailsOtherMayLike from "./DetailsOtherMayLike";
import { PurchaseContainer, DetailsContainer, LayoutContainer } from "./DetailsLayout";


const Detail = ({ data = {} }) => <LayoutContainer>
    <DetailsContainer>
        <DetailHeader {...data} />
        <DetailTabs {...data} />
    </DetailsContainer>
    <PurchaseContainer>
        {data.form != null && data.form}
    </PurchaseContainer>
    <DetailsOtherMayLike {...data} />
</LayoutContainer>

export default Detail;


