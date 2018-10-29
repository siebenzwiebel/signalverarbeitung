signals

  a1 = 1+delta(k)-2.4*delta(k-3)
  a2 = 1-2.4*delta(k)+2*(k-3)
  a3 = epsilon(k-1)-2.4*delta(k-3)
  a4 = delta(k)-2.4*epsilon(k-1)
  a5 = delta(k)-2.4*epsilon(k-2)
  a6 = math.cos(math.pi*k/2)+delta(k-2)
  a7 = math.sin(math.pi*k/2)+delta(k-2)
  a8 = (k-2)*epsilon(k)-delta(k-2)
  a9 = epsilon(k)-2.4*delta(k-2)
  a10 = epsilon(k)*((-1)^k)-delta(k-2)

operations

  op1 = x1(k)
  op2 = x2(k)
  op3 = x1(k)+x2(k)
  op4 = -2*x1(k)
  op5 = x1(k-2)

systems

  sys1      = x(k)-2x(k-1)
  sys2      = x(2k)
  sys3      = (epsilon(k-1)-epsilon(k-2))*x(k)
  sys4      = abs(x(k))
  sys5      = 3*x(k)+1
  sys6      = x(k-1)^2
