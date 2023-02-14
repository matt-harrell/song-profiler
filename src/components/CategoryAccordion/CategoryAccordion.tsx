import { useState } from "react";
import { useSelector } from "react-redux";
import { selectThemeColors } from "../../slices/ThemeSlice";
import CategoryAccordionComp from "./CategoryAccordionComp";

const CategoryAccordion = () => {
    
    const themeColors = useSelector(selectThemeColors)
    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <CategoryAccordionComp
            expanded={expanded}
            themeColors={themeColors}
            handleChange={handleChange}
        />
    );
}

export default CategoryAccordion;