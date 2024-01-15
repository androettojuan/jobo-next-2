
const ScrollLayout = ({ children }) => (
    <div className="flex flex-col h-full">
        {children}
    </div>
);

const FixedPart = ({ children }) => (
    <div className="flex-shrink-0 flex-grow-0 flex-auto">
        {children}
    </div>
);

const ScrollPart = ({ children }) => (
    <div className="overflow-x-hidden overflow-y-auto h-full">
        {children}
    </div>
);

export { ScrollLayout, FixedPart, ScrollPart };
