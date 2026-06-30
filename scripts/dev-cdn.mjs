import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

const isWindows = process.platform === 'win32';
const bin = (name) => resolve(
  'node_modules',
  '.bin',
  isWindows ? `${name}.cmd` : name,
);

const processes = [
  spawn(
    bin('sass'),
    [
      '--watch',
      'public/cdn/components.scss:public/cdn/components.bundle.css',
      '--style=compressed',
      '--no-error-css',
    ],
    { stdio: 'inherit' },
  ),
  spawn(
    bin('vite'),
    ['--open', '/'],
    { stdio: 'inherit' },
  ),
];

let shuttingDown = false;

function shutdown(exitCode = 0) {
  if (shuttingDown) return;
  shuttingDown = true;
  processes.forEach((child) => {
    if (!child.killed) child.kill();
  });
  process.exit(exitCode);
}

processes.forEach((child) => {
  child.on('error', (error) => {
    console.error(error);
    shutdown(1);
  });
  child.on('exit', (code) => {
    if (!shuttingDown) shutdown(code || 0);
  });
});

process.on('SIGINT', () => shutdown());
process.on('SIGTERM', () => shutdown());
