function solution(bridge_length, weight, truck_weights) {
  let time = 0; // 총 시간
  let bridgeQueue = Array(bridge_length).fill(0); // 다리 위 상태 (길이만큼 0으로 채운 큐)
  let bridgeWeight = 0; // 현재 다리 위 트럭 무게 합

  while (bridgeQueue.length > 0) {
    time++;

    // 1. 다리에서 트럭 한 대가 빠짐 (앞에서 하나 제거)
    const leavingTruck = bridgeQueue.shift();
    bridgeWeight -= leavingTruck;

    // 2. 다음 트럭이 올라갈 수 있는지 체크
    if (truck_weights.length > 0) {
      const nextTruck = truck_weights[0];

      if (bridgeWeight + nextTruck <= weight) {
        // 트럭 올라감
        const enteringTruck = truck_weights.shift();
        bridgeQueue.push(enteringTruck);
        bridgeWeight += enteringTruck;
      } else {
        // 무게 초과 -> 빈 자리만 채움 (시간은 흐르게)
        bridgeQueue.push(0);
      }
    }
  }

  return time;
}