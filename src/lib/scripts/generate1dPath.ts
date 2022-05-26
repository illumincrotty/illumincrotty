import type { noiseFunction1d } from 'squeaker/dist/noiseTypes';
import { aleaFactory } from 'alea-generator';
import { perlinNoise1dFactory, interpolationQuintic, valueNoise1dFactory } from 'squeaker';

const randomSource = aleaFactory('hello');
const range = 5,
	scale = 50;
const perlin1d = perlinNoise1dFactory({
	xSize: range,
	random: randomSource.random,
	blendFunction: interpolationQuintic
});

const value1d = valueNoise1dFactory({
	xSize: 15,
	random: randomSource.random,
	blendFunction: interpolationQuintic
});
export const generate1dPath = (noise: noiseFunction1d, range: number, scale: number) => {
	let path = `M 0, 50`;

	for (let i = -10; i < range * scale + 10; i++) {
		path = `${path} L ${(i / (range * scale)) * 100}, ${100 - 100 * noise(i / scale)}`;
	}

	return path;
};

export const path1dPerlin = () => generate1dPath(perlin1d, range, scale);
export const path1dValue = () => generate1dPath(value1d, 10, scale);
