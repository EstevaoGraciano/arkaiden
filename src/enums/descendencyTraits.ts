export enum DescendencyTrait {
    Common = 0,
}

export const GetDescendencyTraitList = () => {
    return [
        {
            label: 'Common',
            value: DescendencyTrait.Common
        }
    ]
}