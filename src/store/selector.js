import { useSelector } from "react-redux";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const articles = useSelector((state) => state.cards.cards);
