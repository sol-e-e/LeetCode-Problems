function searchRange(nums: number[], target: number): number[] {
    if (!nums.length) return [-1, -1];

    function searchIndex(isFirst: boolean) {
        let start = 0, end = nums.length - 1, index = -1;

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);

            if (nums[mid] === target) {
                index = mid;
                if (isFirst) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            } else if (nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return index;
    }

    return [searchIndex(true), searchIndex(false)]
};