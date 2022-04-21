/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { print } from "./";
it("should print the hello world", () => {
  const string = print();
  expect(string).toEqual("Hello World");
});
