import { TestBed } from '@angular/core/testing';

import { ServicioComidaService } from './servicio-comida.service';

describe('ServicioComidaService', () => {
  let service: ServicioComidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioComidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
