import { TextShimmer } from '@/components/ui/text-shimmer';

function TextShimmerColor() {
    return (
        <TextShimmer
            duration={1.2}
            className='text-xl font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]'
        >
            Hi, how are you?
        </TextShimmer>
    );
}

const TextShimmerColorExports = {
    TextShimmerColor
};

export default TextShimmerColorExports;
