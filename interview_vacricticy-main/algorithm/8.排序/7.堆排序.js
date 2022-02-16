/* 堆排序：

    大顶堆：父节点大于所有子节点，用于升序排列
    小顶堆：父节点小于所有子节点，用于降序排列

    步骤：
    1.将数组构建为一个大顶推，由于是完全二叉树，所以可以直接使用数组来模拟
    2.由于此时第一个元素是最大的元素，所以将他与最后一个元素交换，这样可以就得到了目前最大的元素
    3.将前面剩下的元素重新构建为一个大顶堆，重复第2步，知道最后前面只剩下一个元素  
    
    事件复杂度：n/2*logn/2+n*logn/2   O(nlogn)
*/
function heapSort(arr) {
  // 1.从最后一个非叶子节点开始，从右往左，从下往上，将整个数组调整为一个大顶堆
  // 2.最后一个非叶子节点的索引为Math.floor(arr.length/2-1)，可以根据完全二叉树中父节点与子节点的2n+1和2n+2的关系得出
  for (var i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    adjust(arr, i, arr.length);
  }
  // 7.得到大顶堆后，需要循环n-1次，每次都将最后一个元素与第一个元素进行交换，交换后还需要从根节点进行调整
  for (var j = arr.length - 1; j >= 0; j--) {
    var tmp = arr[j];
    arr[j] = arr[0];
    arr[0] = tmp;
    adjust(arr, 0, j);
  }
  console.log(arr);
}
function adjust(arr, i, length) {
  // 6.这里的j的增量设置为了2*j+1，就是为了继续进行第5步中的继续验证
  for (var j = 2 * i + 1; j < length; j = 2 * j + 1) {
    // 3.首先判断其下面的两个子节点哪一个更大
    if (j + 1 < length && arr[j + 1] > arr[j]) {
      j++;
    }
    // 4.1判断当前节点是否小于子节点，如果小于，则与最大的子节点替换
    if (arr[i] < arr[j]) {
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      // 5.替换后，可能会影响下面的子节点的排序，所以需要将当前节点指向被替换的子节点，以它开始继续进行判断
      i = j;
    } else {
      // 4.2如果当前节点就是大于子节点的，则不进行任何处理，跳出循环，去判断下一个元素
      break;
    }
  }
}
heapSort([13, 42, 45, 13, 435, 4, 65, 7]);
