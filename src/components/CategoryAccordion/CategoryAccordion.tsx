import { useState } from "react";
import CategoryAccordionComp from "./CategoryAccordionComp";

const CategoryAccordion = () => {

    const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

    return(
        <CategoryAccordionComp
            expanded={expanded}
            handleChange={handleChange}
        />
    );
}

export default CategoryAccordion;